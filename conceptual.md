### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
> React is a front end framework built with Javascript. It is a greate tool especially when you have repetitive components for your site.

- What is Babel?
> A tool that is used to convert newer JS code to previous versions that are compatible with older browsers. React uses babel to compile its code to traditional JS that is used by the browser.

- What is JSX?
> JSX stands for JavaScript extension. It allows us to include HTML code to be used in JS syntax of react.js. Since it isn't valid JS, browsers can't read it directly so Babel is used to compile it into a browser friendly syntax.

- How is a Component created in React?
> You create a component like a function and return an HTML fragment to render it.

- What are some difference between state and props?
> State persists between variables while props are just arguements passed to the component.

- What does "downward data flow" refer to in React?
> Passing state, functions or props to children components.

- What is a controlled component?
> A component where form data is handled by react.

- What is an uncontrolled component?
> A component that uses the DOM to store things vs React. It is the unpreferred way to work with React.

- What is the purpose of the `key` prop when rendering a list of components?
> It is an id for react to help identify which component you are wanting to manipulate. If you return 15 li components then you need to be able to identify them individually.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
> Because the array order can change and the keys will no longer be accurate.

- Describe useEffect.  What use cases is it used for in React components?
> useEffect is used if you want to run code automatically at different times. You can run the code once on the initial render, with each render or if a particular thing changes in the component.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
> useRef stores a value, persisting between renders similar to useState. However, useRef does not cause a re-render if the value changes like useState would.

- When would you use a ref? When wouldn't you use one?
> You would likely use a ref if you want to store a value you don't need to change the component with. You wouldn't use it if you need to rerender the component with changes.

- What is a custom hook in React? When would you want to write one?
> Custom hooks are just custom functions you can use to refactor and simplify your code. If you have significant repitition between components you can make a custom hook to simplify your code base.
