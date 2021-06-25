/*
 * @Description: 
 */

import faker from "faker"


export interface IData {
  id: number | string
  value: any
}

export const data: Array<IData> = new Array<IData>()
for (let i = 1; i <= 10000; i++) {
  data.push({
    id: i,
    value: faker.name.findName()
  })
}