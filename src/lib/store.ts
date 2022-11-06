import { readable, writable } from "svelte/store";
import localforage from 'localforage'

export const title = readable(`原神抗性表 v${__APP_VERSION__}`)

export const scrollY = writable(0)

// Sider Visibility 
export const innerWidth = writable(0)
export const innerHeight = writable(0)
export const mainWidth = writable(0)

// Scroll To
export const tHeadHeight = writable(0)
export const tCellRace: Map<string, HTMLTableCellElement> = (new Map())

export const imageForage = localforage.createInstance({
  name: 'image',
})

