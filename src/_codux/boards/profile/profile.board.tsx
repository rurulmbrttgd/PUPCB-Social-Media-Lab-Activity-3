import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 5119,
        canvasHeight: 2176,
        canvasWidth: 1920,
    },
});
