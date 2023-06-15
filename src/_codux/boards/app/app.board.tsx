import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 3194,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1928,
    },
});
