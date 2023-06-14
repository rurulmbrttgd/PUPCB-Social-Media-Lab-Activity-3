import { createBoard } from '@wixc3/react-board';
import { Confessionhall } from '../../../components/confessionhall/confessionhall';

export default createBoard({
    name: 'Confessionhall 1',
    Board: () => <Confessionhall />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
