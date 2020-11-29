export default function ({ types: t }) {
  return {
    visitor: {
      DebuggerStatement(path) {
        path.remove();
      },

      CallExpression(path) {
        if (path.node.callee.object.name === 'console') {
          path.remove();
        }
      },
    },
  }
}
