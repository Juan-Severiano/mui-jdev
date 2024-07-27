import type { Components } from '@mui/material/styles';

import { Theme } from '../styles/types';

export const MuiLink = { defaultProps: { underline: 'hover' } } satisfies Components<Theme>['MuiLink'];
