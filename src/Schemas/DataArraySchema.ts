import * as z from "zod"


export const DataObject = z.object({
    id: z.string(),
    name: z.string(),
    state: z.boolean(),
    url: z.string(),
    details: z.string()
})

export const DataArraySchema = z.array(DataObject)


export type DataItem = z.infer<typeof DataObject>
export type DataArrayType = z.infer<typeof DataArraySchema>