I was recently getting transit directions in Apple Maps, and I wanted to switch to satellite view to see what the area around my stop would look like. So I tapped Choose Map → Satellite. Simple enough.

Except it wasn’t. The app zoomed out, switched my transit directions to driving directions, and left me manually pinching and scrolling to find my stop from memory just to see its surroundings.

<video src="/blog/images/apple.mp4" controls width="320" aria-label="Screen capture from my iPhone showing how Apple Maps handles this situation. I am on the map screen, and then I tap on the map type button. I tap on the satellite button, and close the map type screen, and my transit route is no longer visible."></video>

**Why did Apple Maps assume I wanted to drive?**

Let’s set aside the cultural bias of Californian car-centeredness for a moment. The deeper issue here is a UI conflation:

- Map type: How the map is rendered (Standard, Satellite, Terrain, etc.)
- Navigation mode: How you're getting there (Transit, Driving, Walking, Cycling)

By combining these two entirely separate concerns, Apple Maps makes a fundamental UX error: users must repeat steps for unrelated intentions. I didn't want to change travel mode, just the map's appearance.

Google Maps separates these concerns neatly. You can toggle between map types (e.g., Satellite view) without affecting your selected navigation mode. The overlay is just that, an overlay, and it doesn’t hijack your intent. 

<video src="/blog/images/google.mp4" controls width="320" aria-label="Screen capture from my iPhone showing how Google Maps handles this situation. This time, being on the map screen, I tap on the map type button, then tap on the satellite button, and close the map type screen. My transit route is still visible."></video>

This isn’t just a small gripe. If I'm taking the train or the bus on a new route, then you bet that I want to see what the area around the stop will look like, especially if it's late at night. 

![Bookshelf with with old IBM software manuals.](/blog/images/IBM_manuals_(17161235170).jpg)

### "IBM manuals" by Kevin Savetz is licensed under CC BY 2.0

When an interface mixes up simple actions and causes unexpected results, it makes users feel like they’re being punished for poking around. But if the user is not reading a manual before using the software, then curiosity is to be expected. 

Exploring is how the user will put together their own mental map on how to use the app, and with time, they will master it. 

This kind of friction violates core principles of humane interface design. Jef Raskin, creator of the original Macintosh project, laid out these principles in *The Humane Interface*. He argued that software should never distract from the user’s task, and that gestures should be predictable, modeless, and habituating.

Here's a distilled summary of Raskin's principles:

1. Habituating: Interfaces should become automatic with use.

    1a. Modeless: Gestures should behave consistently, regardless of system state.

    1b. Monotonous: There should be one clear way to perform each task.
2. Reliable: The system should never lose your work or mislead you.
3. Efficient: Interfaces should minimize time and cognitive load.
4. Tested: Real-world testing is essential—users reveal flaws theory can’t predict.
5. Pleasant: Visuals and tone matter, but only after the fundamentals are solid.

"An interface should be effective, habituating, reliable, efficient, and tested. To the extend that doing so does not conflict with these essentials, an interface should also be attractive."

When each control does one clear job without hidden consequences, users feel confident and in charge. That’s the kind of design that respects users. 

Apple Maps needs to respect the separation between how we view the map and how we move through it. When curiosity is punished, mastery becomes harder, and the app becomes less humane.