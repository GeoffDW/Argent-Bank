import React from "react";


const Error = () => {
    return (
        <main className= 'error'>
            <section>
                <h2> ERROR 404</h2>
                <p>Page not found</p>
                <Navlink to='/'>
                    <h3>Back to home Page</h3>
                </Navlink>
            </section>
        </main>
    );
}

export default Error;