I was recently getting transit directions in Apple Maps, and I wanted to switch to satellite view to see what the area around my stop would look like. So I tapped Choose Map → Satellite. Simple enough.


APPLE CLIP GOES HERE

Except it wasn’t. The app zoomed out, switched my transit directions to driving directions, and left me manually pinching and scrolling to find my stop from memory just to see its surroundings.

**Why did Apple Maps assume I wanted to drive?**

Let’s set aside the cultural bias of Californian car-centeredness for a moment. The deeper issue here is a UI conflation:

**Map Type ≠ Navigation Mode**

Apple Maps assumes that switching to any map type other than Transit means switching to Driving. But there are two entirely separate concerns here:

- Map type: How the map is rendered (Standard, Satellite, Terrain, etc.)
- Navigation mode: How you're getting there (Transit, Driving, Walking, Cycling)

By combining these two, Apple Maps makes a fundamental UX error: users must repeat steps for unrelated intentions. I didn't want to change travel mode, just the map's appearance.

Google Maps separates these concerns neatly. You can toggle between map types (e.g., Satellite view) without affecting your selected navigation mode. The overlay is just that, an overlay, and it doesn’t hijack your intent. 

GOOGLE PIC GOES HERE

This isn’t just a small gripe. If I'm taking the train or the bus on a new route, then you bet that I want to see what the area around the stop will look like, especially if it's late at night. 

![Bookshelf with with old IBM software manuals.](/blog/images/IBM_manuals_(17161235170).jpg)

### "IBM manuals" by Kevin Savetz is licensed under CC BY 2.0

When an interface mixes up simple actions and causes unexpected results, it makes users feel like they’re being punished for poking around. But if the user is not reading a manual before using the software, then curiosity is to be expected. 

Exploring is how the user will put together their own mental map on how to use the app, and with time, they will master it. 

This kind of friction violates core principles of humane interface design. Jef Raskin, creator of the original Macintosh project, laid out the following principles in *The Humane Interface*, arguing that software should never distract from the user’s task, and that gestures should be predictable, modeless, and habituating.

A summary of design rules Jef Raskin The first principle. When using a product to help you do a task, the product should only help and never distract you from the task. Definition: A gesture is an action that you finish without conscious thought once you have started it. Example: For a beginning typist, typing the letter "t" is a gesture. For a more experienced typist, typing the word "the" is a gesture. Commentary. Designing a human-machine interface demands that both the human and the machine be understood as well as possible. A understanding of the relevant portions of cognitive psychology, ergonomics, and cognetics is essential. That is not all that is needed, but it is a prerequisite. Rule 1. An interface should be habituating. Commentary. If the interface can be operated habitually then, after you have used it for a while, its use becomes automatic and you can release all your attention to the task you are trying to achieve. Any interface will have elements that are habituating, but the principle here is to make the entire interface habituating. Rule 1a. To make an interface habituating, it must be modeless. Commentary. Modes exist where the same gesture yields different results depending on system state at a time when your attention is not on system state. In the presence of modes, you will sometimes make mode errors, where you make a gesture intending to have one result but get a different and unexpected result, distracting you from your task. Rule 1b. To make an interface habituating, it must be monotonous. Commentary. "Monotony" here is a technical term meaning that you do not have to choose among multiple gestures to achieve a particular sub-task. Crudely, there should be only one way to achieve a single-gesture subtask. The second principle: An interface should be reliable. Commentary. Aside from not crashing, the system should never lose any work you have done or any information you have received or retrieved, even if you make a mistake or are forgetful. This is often not thought of as a property of an interface, but one can build a reliable interface on top of an unreliable system (of the order of unreliability of todays operating systems). Rule 2: The system should neither lose your work nor through inaction allow your work to be lost. The third princple: An interface should be efficient and as simple as possible. Commentary. Time is an irreplaceable asset. An interface should not take more of your time than is necessary, either in use or in learning. Rule 3. Good engineering practices should be applied to interface design. Quantitative measures should be used, and an interface should be close to its theoretical minimum in terms of the time it takes to do an operation. Commentary. The GOMS model and information theoretic measures of efficiency (to name two particular techniques among many) must be mastered and used by interface designers. Another set of techniques and measures can be used to help judge learnability. LINK-Where for GOMS? The fourth principle: The suitability of an interface can only be determined by testing. Commentary. All of the theory in the world, and the wisest guru, cannot always predict how an interface will work in practice. One must test, objectively observe, and modify the interface if testing shows that users have difficulties. It is never the user's fault, but also remember that people find it difficult to change, so difficulties based on previous habits may not be dispositive. The fifth principle: An interface should be pleasant in tone and visually attractive. Commentary. How messages are phrased is important, how the interface looks is also important. But these are of secondary importance in terms of task completion. When use of the interface has become habitual, these elements go unnoticed. All of the principles, if followed, create learnable interfaces. Summary. An interface should be effective, habituating, reliable, efficient, and tested. To the extent that doing so does not conflict with these essentials, an interface should also be attractive.

When each control does one clear job without hidden consequences, users feel confident and in charge. That’s the kind of design that respects people.