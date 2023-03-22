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

```mermaid
flowchart
  init --> setConfig & clear & setGen
```

### Flow Chart

#### file `flowRenderer.js`

```mermaid
flowchart
  setConf --> keys[iterate keys] --> for[ for loop] --> assign[copy key/value into configuration]
```
```mermaid
classDiagram
    class `Flow Chart` {
        1. Parse the codes;
        2. Get the parsed data from parser;
        3. category them into vertices and edges;
        4. Vertex and edge has attritbutes.
        5. The shape is drawed by SVG library.
        6. Each diagram has parser, renderer, styles,configuation and database.
        7. d3 library is the render engine.
        8. The database has the graph data.
        9. The style file uses long text to provide default styles.
        10. The test is used to enforce the design specification.
    }
```
```mermaid
classDiagram
    class `YACC` {
        1. Rules that describe the input elements.
        2. The code that is to be invoked when one rule is recognized.
        3. A definition or declaration of a low-level scanner that examines the input.
    }
    Grammer -- Action
```    
