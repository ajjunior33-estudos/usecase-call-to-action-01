import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Example01 } from './pages/example01';
import { Example02 } from './pages/example02';
import { Example03 } from './pages/example03';
import { Example04 } from './pages/example04';
import { Example05 } from './pages/example05';
import { Example06 } from './pages/example06';
import { Example07 } from './pages/example07';
import { Example08 } from './pages/example08';
const ListRoutes:FC = ( ) => {
    return (
        <Routes>
            <Route path="/" element={<Example01 />} />
            <Route path="/example02" element={<Example02 />} />
            <Route path="/example03" element={<Example03 />} />
            <Route path="/example04" element={<Example04 />} />
            <Route path="/example05" element={<Example05 />} />
            <Route path="/example06" element={<Example06 />} />
            <Route path="/example07" element={<Example07 />} />
            <Route path="/example08" element={<Example08 />} />

        </Routes>
    )
}
export {ListRoutes}