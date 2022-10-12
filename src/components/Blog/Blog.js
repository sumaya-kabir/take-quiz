import React from 'react';

const Blog = () => {
    return (
        <div className='m-10 p-10'>
            <h2 className='text-5xl mb-10 text-center'>Questions With Answer</h2>
            <article className='mb-10 border-2 border-red-400 rounded-xl p-10'>
                <h3 className='text-4xl mb-6'>What is the purpose of react router?</h3>
                <p>
                React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                <br />
                <br />
                The main Components of React Router are:
                <br />
                <bold className="font-semibold">BrowserRouter:</bold> BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
                <br />
                <bold className="font-semibold">Routes:</bold> It is a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
                <br />
                1. Relative s and s
                2. Routes are chosen based on the best match instead of being traversed in order.
                <br />
                <bold className="font-semibold">Route:</bold> Route is the conditionally shown component that renders some UI when its path matches the current URL.
                <br />
                <bold className="font-semibold">Link:</bold> Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
                </p>
            </article>
            <article className='mb-10 border-2 border-red-400 rounded-xl p-10'>
                <h3 className='text-4xl mb-6'>How does context api works?</h3>
                <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                <br />
                <br />
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. 
                <br />
                useContext accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest --- MyContext.Provider --- above the calling component in the tree.
                </p>
            </article>
            <article className='mb-10 border-2 border-red-400 rounded-xl p-10'>
                <h3 className='text-4xl mb-6'>How does useRef hook works? </h3>
                <p>
                useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                <br />
                Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                <br />

                You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with ---div ref=myRef /---, React will set its .current property to the corresponding DOM node whenever that node changes.
                <br />
                However, useRef() is useful for more than the ref attribute. It is handy for keeping any mutable value around similar to how you would use instance fields in classes.
                </p>
            </article>
        </div>
    );
};

export default Blog;