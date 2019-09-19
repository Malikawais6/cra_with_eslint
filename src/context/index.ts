import { createContext } from "react";
import {TableContextType} from "../components/Table/Table.types"
//Reducer updatestate content
export const initialContent = {data:[],dispatch:()=>undefined};
export const TableContext = createContext<TableContextType>({data:[],columns:[],dispatch:()=>undefined,onAdd:()=>{},onEdit:()=>{},onDelete:()=>{}});