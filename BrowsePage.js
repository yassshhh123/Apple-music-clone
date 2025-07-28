import React, { Suspense } from 'react';
import Footer from './Footer/Footer';

const Romantic = React.lazy(() => import('./Mood/Romantic'));
const Tending = React.lazy(() => import('./Mood/Tending'))
const Excited = React.lazy(() => import('./Mood/Excited'));
const Happy = React.lazy(() => import('./Mood/Happy'));
const Sad = React.lazy(() => import('./Mood/Sad'));
const NewReleases = React.lazy(() => import('./Mood/NewReleases'));
const TopCharts = React.lazy(() => import('./Mood/TopCharts'));
const Artists = React.lazy(() => import('./Mood/Artists'));

function BrowsePage() {
    return (
        <>
            <div className="container p-4 bg-black text-white">
                <h1 className="text-3xl text-center font-bold mb-4 pt-3 mt-11">Featured Music</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <section className="mt-8">
                        <Tending />
                    </section>
                    <section className="mt-8">
                        <NewReleases />
                    </section>
                    <section className="mt-8">
                        <TopCharts />
                    </section>
                    <section className="mt-8">
                        <Romantic />
                    </section>
                    <section className="mt-8">
                        <Excited />
                    </section>
                    <section className="mt-8">
                        <Happy />
                    </section>
                    <section className="mt-8">
                        <Sad />
                    </section>
                    <section className="mt-8">
                        <Artists />
                    </section>
                </Suspense>
            </div>
            <Footer />
        </>
    );
}

export default BrowsePage;