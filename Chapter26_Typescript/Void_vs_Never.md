# Void vs Never in TypeScript

| Feature | `Void` | `Never` |
|---|---|---|
| **Meaning** | Function returns nothing | Function **never** returns (never completes) |
| **Example** | `function sayHello(Message: string): void` | `function throwError(message: string): never` |
| **What it does** | Logs to console, no return value | Throws an error / runs infinite loop |
| **Return statement** | Can have `return;` (optional) | Cannot return — function never finishes |
| **Use case** | Functions with side effects (logging, DOM updates) | Functions that always throw, infinite loops, or infinite recursion |
| **Can assign a value?** | Yes, but value is `undefined` | No — impossible to assign since it never returns |

## Examples from 199_TS_Part4.ts

```typescript
// void - function finishes but returns nothing
function sayHello(Message: string): void {
    console.log(Message);
}

// never - function throws and never returns
function throwError(message: string): never {
    throw new Error(message);
}

// never - function loops forever and never returns
function infiniteLoop(): never {
    while (true) { }
}
```

## Quick Rule of Thumb

- **`void`** = "I'm done, but I have nothing for you."
- **`never`** = "I'm **never** done" (either crashes or runs forever).
