export default function ({ types: t }) {
  return {
    visitor: {

      // Remove debugger statements
      // DebuggerStatement(path) {
      //   path.remove();
      // },

      // Remove debuggers inside if statements
      // DebuggerStatement(path) {
      //   if (t.isIfStatement(path.parentPath.parentPath)) {
      //     path.remove();
      //   }
      // },

      // Replace debuggers with console logs
      // DebuggerStatement(path) {
      //   const consoleLog = t.callExpression(
      //     t.memberExpression(
      //       t.identifier('console'),
      //       t.identifier('log'),
      //     ),
      //     [t.stringLiteral('Debugger was here!!!')],
      //   );
      //
      //   path.insertBefore(consoleLog);
      //   path.remove();
      // },

      // Remove console logs
      // CallExpression(path) {
      //   if (path.node.callee.object.name === 'console') {
      //     path.remove();
      //   }
      // },
    },
  }
}
