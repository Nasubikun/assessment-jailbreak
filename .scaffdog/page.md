---
name: "page"
root: "src/components/page"
output: "."
ignore: []
questions:
  name: "Please enter the name."
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.page.tsx`

```tsx
{{- inputs.name | pascal | define "name" -}}

import { {{ name }} } from "./{{ name }}"
import { LayoutDefault } from "@/components/ui/LayoutDefault"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/ui/Footer"

export const {{ name }}Page = () => {
  return (
    <LayoutDefault header={<Header/>} footer={<Footer/>}>
      <{{ name }} />
    </LayoutDefault>
  )
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
{{- inputs.name | pascal | define "name" -}}

export const {{ name }} = (): JSX.Element => {
  return (
    <div>hello</div>
  )
}
```

# `{{ inputs.name | pascal }}/index.ts`

```ts
{{- inputs.name | pascal | define "name" -}}

import { {{ name }}Page } from "./{{ name }}.page"

export default {{ name }}Page
```
