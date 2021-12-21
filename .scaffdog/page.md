---
name: 'page'
root: 'src/components/page'
output: '.'
ignore: []
questions:
  name: 'Please enter the name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.page.tsx`

```tsx
import { {{ inputs.name | pascal }} } from "./{{ inputs.name | pascal }}"

export const {{ inputs.name | pascal }}Page = () => {
  return (
    <div>
      <{{ inputs.name | pascal }} />
    </div>
  )
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import styles from "./{{ inputs.name | pascal }}.module.css"

export const {{ inputs.name | pascal }} = (): JSX.Element => {
  return (
    <div>hello</div>
  )
}
```

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.module.css`

```css
```

# `{{ inputs.name | pascal }}/index.ts`

```ts
import { {{ inputs.name | pascal }}Page } from "./{{ inputs.name | pascal }}.page"

export default {{ inputs.name | pascal }}Page
```
