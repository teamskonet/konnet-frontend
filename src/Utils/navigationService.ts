import * as React from 'react';
export const navigationRef: any = React.createRef()

export function navigate(name: String, params: String) {
  navigationRef.current.navigate(name, params);
}
