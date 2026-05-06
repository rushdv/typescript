// conditional type : which is depending on the condition it will return a type

type A = null
type B = undefined

type C = A extends number ? true : B extends undefined ? true : false