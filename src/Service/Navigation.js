/* eslint-disable import/no-extraneous-dependencies */
import { NavigationActions, DrawerActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(r) {
  navigator = r;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

function openDrawer() {
  navigator.dispatch(DrawerActions.openDrawer());
}
function closeDrawer() {
  navigator.dispatch(DrawerActions.closeDrawer());
}

function back() {
  navigator.dispatch(NavigationActions.goBack());
}

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer,
  closeDrawer,
  back
};
