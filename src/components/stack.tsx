import type { Components } from '@mui/material/styles';

import { Theme } from '../styles/types';

export const MuiStack = { defaultProps: { useFlexGap: true } } satisfies Components<Theme>['MuiStack'];
