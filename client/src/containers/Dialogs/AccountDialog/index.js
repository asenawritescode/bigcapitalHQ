import React, { lazy } from 'react';
import { FormattedMessage as T } from 'components';
import { Dialog, DialogSuspense } from 'components';
import withDialogRedux from 'components/DialogReduxConnect';
import { compose } from 'utils';

const AccountDialogContent = lazy(() => import('./AccountDialogContent'));

/**
 * Account form dialog.
 */
function AccountFormDialog({
  dialogName,
  payload = { action: '', id: null },
  isOpen,
}) {
  return (
    <Dialog
      name={dialogName}
      title={
        (payload.action === 'edit') ?
          (<T id={'edit_account'} />) :
          (<T id={'new_account'} />)
      }
      className={'dialog--account-form'}
      autoFocus={true}
      canEscapeKeyClose={true}
      isOpen={isOpen}
    >
      <DialogSuspense>
        <AccountDialogContent
          dialogName={dialogName}
          accountId={payload.id}
          action={payload.action}
          parentAccountId={payload.parentAccountId}
          accountType={payload.accountType}
        />
      </DialogSuspense>
    </Dialog>
  );
}

export default compose(
  withDialogRedux(),
)(AccountFormDialog);