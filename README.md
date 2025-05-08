# Assignment_1


<!-- ***************************************************************** -->
# ** TypeScript Showdown: Interface vs Type — Who Rules the Kingdom?**
In the vast kingdom of TypeScript, two mighty champions reign:
Interface and Type.

Both are powerful.
Both shape the land.
But their weapons, strengths, and strategies are very different.

Let’s witness their legendary battle.

 Round 1: Origins and Powers
Interface — the Royal Architect

Born to define the blueprint of objects.

Specializes in structure and contracts.

Commands extends to build on other interfaces.

Partners seamlessly with classes through implements.

Example:


                interface Knight {
                name: string;
                sword: string;
                }

 Type — the Shape-shifting Sorcerer

Master of aliases.

Can describe objects, unions, intersections, primitives — you name it.

Wields the power of | (union) and & (intersection).

No ties to classes — a true lone wolf.

Example:


            type Knight = {
            name: string;
            sword: string;
            };

 Round 2: Special Moves
 Interface’s Special Moves

⚡ Declaration merging
→ Declare interface Knight twice → it magically merges into one.

⚡ Extends kingdom alliances
→ Builds massive networks with extends.

 Type’s Special Moves

 Union spells
→ type Weapon = 'sword' | 'bow' | 'axe';

 Intersection enchantments
→ type ArmoredKnight = Knight & { armor: string };

 Works with primitives
→ type Age = number;

⚔️ Round 3: Limitations
 Interface’s Weakness

Bound mostly to objects and classes.

No union or intersection magic.

Needs extends to combine, but can’t mix primitives.

 Type’s Weakness

Hates duplicate declarations — no declaration merging.

Sometimes less clear when modeling purely object contracts.

⚔️ Final Verdict: Allies, Not Enemies
At the end of the battle, something surprising happens.
The two champions lower their swords and shake hands.

Because in TypeScript, Interface and Type work best together.

Example:


            interface Character {
            name: string;
            }

type Warrior = Character & { weapon: string };
 Takeaway: Choose the Right Champion
Use Interface →	Use Type →
Object contracts	Anything: objects, unions, primitives
Extending with extends	Combining with & and `
Class implements	Complex type operations
Declaration merging	Utility types, mapped types

⚡ Final Wisdom
Don’t waste time picking a side.
Instead, become a TypeScript champion by knowing when to call on Interface and when to summon Type.

Because together, they rule the kingdom.







<!-- ************************************************* -->

# **🌟 What Is Type Inference in TypeScript and Why Is It Helpful?**

TypeScript is well known for its static type system, which makes JavaScript development safer and more predictable. But here’s something many developers love about TypeScript: you don’t always have to explicitly declare types.

This is where type inference comes in.

💡 What is Type Inference?
Type inference means that TypeScript can automatically figure out the type of a variable, parameter, or expression — even if you don’t explicitly tell it.

In other words, when you write:

    let message = "Hello, TypeScript!";

TypeScript automatically understands that message is a string — even though you didn’t write:

     let message: string = "Hello, TypeScript!";

This happens because TypeScript looks at the initial value (or context) and intelligently assigns a type.

✨ Why is Type Inference Helpful?
Less Code, Better Readability

You don’t have to write out types everywhere, which keeps your code clean and easy to read.

Example:

        let count = 10;  // inferred as number

Catch Errors Early

Even when you don’t declare types, TypeScript can still check for errors.

Example:
     let isDone = false;

isDone = "yes";  // ❌ Error: Type 'string' is not assignable to type 'boolean'
Faster Development

You write less boilerplate code but still get the benefits of type safety and autocompletion.

Smart Autocomplete in Editors

Tools like VS Code can offer better IntelliSense suggestions because they know the inferred types.

📦 Examples of Type Inference
Variables

                let name = "Alice";  // inferred as string
                let age = 30;        // inferred as number
Functions (return type inference)


function add(a: number, b: number) {
  return a + b;      // inferred as number
}
Array types

let numbers = [1, 2, 3];  // inferred as number[]

⚠️ When to Be Careful
While type inference is powerful, it’s not magic. Sometimes it’s still best to explicitly declare types — especially in public APIs, function parameters, or complex data structures — to improve clarity and avoid misunderstandings.

Example:

            function greet(name: string) {
            console.log(`Hello, ${name}`);
            }
🚀 Summary
✅ Type inference means TypeScript figures out types automatically
✅ It reduces the need for manual type annotations
✅ It makes code cleaner, safer, and faster to write
✅ It helps with editor autocompletion and early error detection

By understanding and using type inference wisely, you can make your TypeScript code both elegant and robust.