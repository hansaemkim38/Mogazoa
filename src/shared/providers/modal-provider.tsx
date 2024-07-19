import { useEffect, useState } from 'react';
import { FollowModal } from '../components/modals/follow-modal';
import { FollowingModal } from '../components/modals/following-modal';
import { CompareModal } from '../components/modals/compare-modal';
import { CompareConfirmModal } from '../components/modals/compare-confirm-modal';
import { ReviewModal } from '../components/modals/review-modal';
import { ItemEditModal } from '../components/modals/item-edit-modal';
import { ItemAddModal } from '../components/modals/item-add-modal';
import { ProfileEditModal } from '../components/modals/profile-edit-modal';
import { LoginModal } from '../components/modals/login-modal';
import { CompareNoticeModal } from '../components/modals/compare-notice-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <FollowModal />
      <FollowingModal />
      <CompareConfirmModal />
      <ReviewModal />
      <ItemEditModal />
      <ItemAddModal />
      <ProfileEditModal />
      <LoginModal />
      <CompareNoticeModal />
    </>
  );
};
