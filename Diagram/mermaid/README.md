# Code Overview

## Root Directory

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

## Packages Directory

### file `flowDiagram.ts`

```mermaid
classDiagram
  class diagram {
    flowParser parser
    flowDb db
    flowRenderer renderer
    init(config Config)
  }
```
