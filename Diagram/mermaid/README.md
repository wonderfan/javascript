# Code Overview

## Directory

```dot
digraph {
  mermaid -> { docs packages scripts }
  packages -> { mermaid-src mermaid-examples }
}
```

```mermaid
flowchart
  mermaid --> docs & packages & scripts
  packages --> mermaid-src & mermaid-examples
```
