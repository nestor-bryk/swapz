
let /*connect wallet*/
    connectWalletButton = document.querySelector('.button');
    closeModalButton = document.querySelector('.wallets_modal_close__btn');
    walletsModal = document.querySelector('.modal_container');
    walletConnectWrapper = document.querySelector('.wallet-connect-wrapper')
    connectMetamask = document.querySelector('.metamask');
    connectWalletConnect = document.querySelector('.walletConnect');
    closeWallectConnectButton = document.querySelector('.wallet-connect-modal__close__wrapper');
    

    /* dropdown menu */
    burgerButton = document.querySelector('.dropdown-icon');
    closeButton = document.querySelector('.dropdown-icon__close');
    dropdownMenu = document.querySelector('.header-dropdown');
    dropdownAddress = document.querySelector('.address');
    dropdownLogout = document.querySelector('.logout');
    

    /* header elements */
    header = document.querySelector('header');
    addressWallet = document.querySelector('.address-wallet');
    logoutButtons = document.querySelectorAll('.logout-button-in-header');


    /* main elements */
        /* navbar */
        navbar = document.querySelector('.navbar-main');
        NFTsButtons = document.querySelectorAll('.nfts');
        openSwapButtons = document.querySelectorAll('.openSwap');
        recentSwapButtons = document.querySelectorAll('.recentSwap');
        startSwapButtons = document.querySelectorAll('.start-swap-button');
        cancelSwapButtons = document.querySelectorAll('.cancel-swap-button');

        /* landing page */
        landingPage = document.querySelector('.landing');

        /* empty state Page */
        emptyStatePage = document.querySelector('.empty-state');
            /* empty state nfts */
            emptyStateNfts = document.querySelector('.empty-state-nfts');

            /* empty state swaps */
            emptyStateSwaps = document.querySelector('.empty-state-swaps');

            /* terms of use */
            termsOfUsePage = document.querySelector('.terms-of-use');
        
            /* privacy policy */
            privacyPolicyPage = document.querySelector('.privacy-policy');



    /* footer elements */
        /* footer mobile */
        modileFooter = document.querySelector('.mobile-footer');

        /* status-bar */
        statusBar = document.querySelector('.status-bar');

        termsOfUseLinks = document.querySelectorAll('.terms-of-use-link');
        privacyPolicyLinks = document.querySelectorAll('.privacy-policy-link');
        







/* connect wallet */
connectWalletButton.addEventListener('click', () => {
    walletsModal.style.display = 'flex';
})

closeModalButton.addEventListener('click', () => {
    walletsModal.style.display = 'none';
})

connectMetamask.addEventListener('click', () => {
    walletsModal.style.display = 'none';
    connectWalletButton.style.display = 'none';
    addressWallet.style.display = 'flex';

    dropdownAddress.style.display = 'flex';
    dropdownLogout.style.display = 'flex';

    navbar.classList.remove('hidden-block');

    for(let i = 0; i < NFTsButtons.length; i++) {
        NFTsButtons[i].classList.add('active');
    }
    
    landingPage.classList.add('hidden-block');
    privacyPolicyPage.classList.add('hidden-block')
    termsOfUsePage.classList.add('hidden-block')
    emptyStatePage.classList.remove('hidden-block');

    modileFooter.classList.remove('hidden-block')
})

connectWalletConnect.addEventListener('click', () => {
    walletConnectWrapper.classList.remove('hidden-block')
})

closeWallectConnectButton.addEventListener('click', () => {
    walletConnectWrapper.classList.add('hidden-block')
    walletsModal.style.display = 'none';
})


for(let i = 0; i < logoutButtons.length; i++) {
    logoutButtons[i].addEventListener('click', () => {
        connectWalletButton.style.display = 'flex';
        addressWallet.style.display = 'none';

        dropdownAddress.style.display = 'none';
        dropdownLogout.style.display = 'none';

        navbar.classList.add('hidden-block');

        emptyStatePage.classList.add('hidden-block');
        privacyPolicyPage.classList.add('hidden-block');
        termsOfUsePage.classList.add('hidden-block');
        landingPage.classList.remove('hidden-block');
        
        modileFooter.classList.add('hidden-block')
    })
}


/* dropdown menu */
burgerButton.addEventListener('click', () => {
    dropdownMenu.style.display = 'flex';
    connectWalletButton.classList.add('hidden-block');
    burgerButton.classList.add('hidden-block');
    closeButton.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
    connectWalletButton.classList.remove('hidden-block');
    burgerButton.classList.remove('hidden-block');
    closeButton.style.display = 'none';
})

/* navbar events */

for(let i = 0; i < NFTsButtons.length; i++) {
    NFTsButtons[i].addEventListener('click', () => {

        for(let i = 0; i < NFTsButtons.length; i++) {
            NFTsButtons[i].classList.add('active');
            openSwapButtons[i].classList.remove('active');
            recentSwapButtons[i].classList.remove('active');
        }

        for(let i = 0; i < startSwapButtons.length; i++) {
            startSwapButtons[i].classList.remove('hidden-block');
        }
        
        emptyStatePage.classList.remove('hidden-block')

        emptyStateNfts.classList.remove('hidden-block')
        emptyStateSwaps.classList.add('hidden-block')

        privacyPolicyPage.classList.add('hidden-block');
        landingPage.classList.add('hidden-block');
        termsOfUsePage.classList.add('hidden-block');
    })
}

for(let i = 0; i < openSwapButtons.length; i++) {
    openSwapButtons[i].addEventListener('click', () => {

        for(let i = 0; i < openSwapButtons.length; i++) {
            openSwapButtons[i].classList.add('active');
            NFTsButtons[i].classList.remove('active');
            recentSwapButtons[i].classList.remove('active');
        }

        for(let i = 0; i < startSwapButtons.length; i++) {
            startSwapButtons[i].classList.add('hidden-block');
            cancelSwapButtons[i].classList.add('hidden-block');
        }
    
        emptyStatePage.classList.remove('hidden-block')

        emptyStateNfts.classList.add('hidden-block')
        emptyStateSwaps.classList.remove('hidden-block')

        privacyPolicyPage.classList.add('hidden-block');
        landingPage.classList.add('hidden-block');
        termsOfUsePage.classList.add('hidden-block');

        statusBar.classList.add('hidden-block');
    })
}


for(let i = 0; i < recentSwapButtons.length; i++) {
    recentSwapButtons[i].addEventListener('click', () => {

        for(let i = 0; i < recentSwapButtons.length; i++) {
            recentSwapButtons[i].classList.add('active');
            NFTsButtons[i].classList.remove('active');
            openSwapButtons[i].classList.remove('active');
        }

        for(let i = 0; i < startSwapButtons.length; i++) {
            startSwapButtons[i].classList.add('hidden-block');
            cancelSwapButtons[i].classList.add('hidden-block');
        }
    
        emptyStatePage.classList.remove('hidden-block')

        emptyStateNfts.classList.add('hidden-block')
        emptyStateSwaps.classList.remove('hidden-block')

        privacyPolicyPage.classList.add('hidden-block');
        landingPage.classList.add('hidden-block');
        termsOfUsePage.classList.add('hidden-block');

        statusBar.classList.add('hidden-block');
    })
}


/* Start swap buttons */
for(let j = 0; j < startSwapButtons.length; j++) {
    startSwapButtons[j].addEventListener('click', () => {
        for(let i = 0; i < startSwapButtons.length; i++) {
            startSwapButtons[i].classList.add('hidden-block');
            cancelSwapButtons[i].classList.remove('hidden-block');
        }
    
        statusBar.classList.remove('hidden-block');
    })
}

for(let j = 0; j < cancelSwapButtons.length; j++) {
    cancelSwapButtons[j].addEventListener('click', () => {
        for(let i = 0; i < cancelSwapButtons.length; i++) {
            startSwapButtons[i].classList.remove('hidden-block');
            cancelSwapButtons[i].classList.add('hidden-block');
        }
    
        statusBar.classList.add('hidden-block');
    })
}



for(let i = 0; i < termsOfUseLinks.length; i++) {
    termsOfUseLinks[i].addEventListener('click', () => {
        termsOfUsePage.classList.remove('hidden-block');

        landingPage.classList.add('hidden-block');
        emptyStatePage.classList.add('hidden-block');
        privacyPolicyPage.classList.add('hidden-block');

        dropdownMenu.style.display = 'none';
        burgerButton.classList.remove('hidden-block');
        closeButton.style.display = 'none';
    })
}

for(let i = 0; i < privacyPolicyLinks.length; i++) {
    privacyPolicyLinks[i].addEventListener('click', () => {
        privacyPolicyPage.classList.remove('hidden-block');

        landingPage.classList.add('hidden-block');
        emptyStatePage.classList.add('hidden-block');
        termsOfUsePage.classList.add('hidden-block');

        dropdownMenu.style.display = 'none';
        burgerButton.classList.remove('hidden-block');
        closeButton.style.display = 'none';
    })
}





