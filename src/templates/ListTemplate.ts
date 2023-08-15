import FullList from "../model/FullList"

interface DOMList {
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {

  ul: HTMLUListElement
  
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement
  }
}