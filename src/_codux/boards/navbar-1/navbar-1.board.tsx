import { createBoard } from '@wixc3/react-board';
import { Navbar1 } from '../../../components/navbar-1/navbar-1';

export default createBoard({
    name: 'Navbar1',
    Board: () => <Navbar1 />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 828,
    },
});
