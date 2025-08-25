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

"IBM manuals" by Kevin Savetz is licensed under CC BY 2.0

When an interface mixes up simple actions and causes unexpected results, it makes users feel like they’re being punished for poking around. But if the user is not reading a manual before using the software, then curiosity is to be expected. Exploring is how the user will put together their own mental map on how to use the app, and with time, they will master it. When each control does one clear job without hidden consequences, users feel confident and in charge. That’s the kind of design that respects people.