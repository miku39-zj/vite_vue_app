/*
 * @Description: 
 */
import faker from "faker"


export type IData = {
  id: number | string
  value: any
}

export const data: Array<IData> = new Array<IData>()
for (let i = 1; i <= 100000; i++) {
  data.push({
    id: i,
    // value: faker.name.findName()
    value: Math.random().toString(36).slice(-6)
  })
}