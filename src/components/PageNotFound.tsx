import React from 'react';
import EmptyState from './EmptyState';

import { Icon, Button } from '@chakra-ui/react';
import { MdOutlineWrongLocation } from 'react-icons/md';

const PageNotFound: React.FC = () => {
    return (
        <EmptyState
          icon={<Icon as={MdOutlineWrongLocation} boxSize={20} />}
          title="404 Page not found"
          message="We didn&apos;t find a page that matches the address you navigated to."
          action={<Button>Take me home</Button>}
        />
    );
};

export default PageNotFound;