import { createBoard } from '@wixc3/react-board';
import { Confessionhall } from '../../../components/confessionhall/confessionhall';

export default createBoard({
    name: 'Confessionhall',
    Board: () => <Confessionhall />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 2490,
    },
});
