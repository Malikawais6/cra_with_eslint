import { useCallback, useReducer, useRef, useMemo } from "react";
import { DashboardState, Action } from "../../pages/Dashboard/context/DashboardContextProvider";

type State = DashboardState;
type CustomAction=Action;
/**
 * @description useCustomReducer only added the logging functionality
 *  to the build-in reducer
 * @param {*} reducerFn reducerFn is a reducer function which handles
 *   all state reducing cases
 * @param {*} initialState initial state reduer
 * @param {*} enableLogger Boolean use for enabling/disabling logs during state change
 */
export function useCustomReducer(reducerFn:(state: State, action: CustomAction) => State, initialState:any, enableLogger?:boolean) {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  // We use preState for storing the previous state and storing actiontype
  // when if the user dispatch any action with type to in logging
  const preState:any = useRef();

  // @Note we added empty dependency for dispatchWithLogging callback
  // because user can use it exactly the same way as normal dispatch
  // of useReducer for dependencies.
  const dispatchWithLogging:any = useCallback((action:any) => {
    if (typeof action === "function")
      return action(dispatchWithLogging, () => preState.state);

    const actionType = typeof action === "object" ? action.type : action;

    preState.current.actions = preState.current.actions || [];
    preState.current.actions.push({ actionType, action });

    dispatch(action);
  }, []);

  // We separate the dispatch mechanism in case user do not want logging
  const customDispatch = enableLogger ? dispatchWithLogging : dispatch;

  // @Note after every dispatch state updation useMemo get called because
  // we added the state in dependencies.
  useMemo(
    function logStateAfterChange() {
      // we can pring the logs only in case user enable it and user update state
      if (!enableLogger || !preState.current) return;

      for (let i = 0; i < preState.current.actions.length; i++) {
        const {
          actionType,
          state: previousState,
          action
        } = preState.current.actions[i];
        console.groupCollapsed(`${actionType}`);
        console.log("%c Previous State", "color: red;", previousState);
        console.log("%c Action", "color: blue", action);
        console.log("%c Current State", "color: green", state);
        console.groupEnd();
      }

      // Reset the actions dispatching list
      preState.current.actions = [];
    },
    [state, enableLogger]
  );

  preState.current = { ...preState.current, state };

  return [state, customDispatch];
}
