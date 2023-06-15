import { createBoard } from '@wixc3/react-board';
import { Profile } from '../../../components/profile/profile';

export default createBoard({
    name: 'Profile',
    Board: () => <Profile />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 2468,
        canvasWidth: 1920,
    },
});
