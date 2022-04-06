import React, { Suspense } from 'react';

const LazyCom = React.lazy(() => import('./LazyCom'));

const Split = () => {
    import('./math').then((math)=>{
        console.log(math.add(10,15));
    });
    return (
        <div>
            <h1>Code Splitting, check console</h1>
            <Suspense fallback={<h1>Loading...</h1>}>
                <LazyCom />
            </Suspense>
        </div>
    )
}

export default Split