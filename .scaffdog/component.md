---
name: 'component'
root: 'src/components'
output: ['*', 'model/*']
ignore: ['src/components', 'src/components/model', 'src/components/page']
questions:
  name: 'Please enter the name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```tsx
import styles from "./{{ inputs.name | pascal }}.module.css"

type {{ inputs.name | pascal }}Props = {}

export const {{ inputs.name | pascal }} = (props: {{ inputs.name | pascal }}Props): JSX.Element => {
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
export * from "./{{ inputs.name | pascal }}"
```
