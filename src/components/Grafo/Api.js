export const graph = {
    nodes: [
        { id: 1, label: "Node 1", title: "node 1 tootip text", shape: "circle"},
        { id: 2, label: "Node 2", title: "node 2 tootip text" },
        { id: 3, label: "Node 3", title: "node 3 tootip text" },
        { id: 4, label: "Node 4", title: "node 4 tootip text" },
        { id: 5, label: "Node 5", title: "node 5 tootip text" },
        { id: 6, label: "Node 6", title: "node 6 tootip text" },
        { id: 7, label: "Node 7", title: "node 7 tootip text" }

    ],
    edges: [
        { from: 1, to: 2 , label: "Edge 1"},
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 3 },
        { from: 2, to: 1 },
        { from: 1, to: 5 },
        { from: 7, to: 2 },
        { from: 6, to: 4 },
        { from: 3, to: 4 }
    ]
};
