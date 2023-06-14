import { createBoard } from '@wixc3/react-board';
import { People } from '../../../components/people/people';

export default createBoard({
    name: 'People',
    Board: () => <People />,
    environmentProps: {
        windowHeight: 860,
    },
});
