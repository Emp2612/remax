'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var promisify_1 = __importDefault(require('./promisify'));
exports.getAppStub = getApp;
exports.addCardAuth = promisify_1.default(my.addCardAuth);
exports.addPhoneContact = promisify_1.default(my.addPhoneContact);
exports.alert = promisify_1.default(my.alert);
exports.canIUse = my.canIUse;
exports.chooseAlipayContact = promisify_1.default(my.chooseAlipayContact);
exports.chooseCity = promisify_1.default(my.chooseCity);
exports.chooseContact = promisify_1.default(my.chooseContact);
exports.chooseImage = promisify_1.default(my.chooseImage);
exports.chooseLocation = promisify_1.default(my.chooseLocation);
exports.choosePhoneContact = promisify_1.default(my.choosePhoneContact);
exports.clearStorage = my.clearStorage;
exports.clearStorageSync = my.clearStorageSync;
exports.closeBluetoothAdapter = promisify_1.default(my.closeBluetoothAdapter);
exports.closeSocket = promisify_1.default(my.closeSocket);
exports.compressImage = promisify_1.default(my.compressImage);
exports.confirm = promisify_1.default(my.confirm);
exports.connectBLEDevice = promisify_1.default(my.connectBLEDevice);
exports.connectSocket = promisify_1.default(my.connectSocket);
exports.createAnimation = my.createAnimation;
exports.createCanvasContext = my.createCanvasContext;
exports.createIntersectionObserver = my.createIntersectionObserver;
exports.createMapContext = my.createMapContext;
exports.createSelectorQuery = my.createSelectorQuery;
exports.createWebViewContext = my.createWebViewContext;
exports.datePicker = promisify_1.default(my.datePicker);
exports.disconnectBLEDevice = promisify_1.default(my.disconnectBLEDevice);
exports.downloadFile = promisify_1.default(my.downloadFile);
exports.getAuthCode = promisify_1.default(my.getAuthCode);
exports.getAuthUserInfo = promisify_1.default(my.getAuthUserInfo);
exports.getBatteryInfo = promisify_1.default(my.getBatteryInfo);
exports.getBatteryInfoSync = my.getBatteryInfoSync;
exports.getBeacons = promisify_1.default(my.getBeacons);
exports.getBLEDeviceCharacteristics = promisify_1.default(my.getBLEDeviceCharacteristics);
exports.getBLEDeviceServices = promisify_1.default(my.getBLEDeviceServices);
exports.getBluetoothAdapterState = promisify_1.default(my.getBluetoothAdapterState);
exports.getBluetoothDevices = promisify_1.default(my.getBluetoothDevices);
exports.getClipboard = promisify_1.default(my.getClipboard);
exports.getConnectedBluetoothDevices = promisify_1.default(my.getConnectedBluetoothDevices);
exports.getFileInfo = promisify_1.default(my.getFileInfo);
exports.getImageInfo = promisify_1.default(my.getImageInfo);
exports.getLocation = promisify_1.default(my.getLocation);
exports.getNetworkType = promisify_1.default(my.getNetworkType);
exports.getPhoneNumber = promisify_1.default(my.getPhoneNumber);
exports.getRunData = promisify_1.default(my.getRunData);
exports.getRunScene = promisify_1.default(my.getRunScene);
exports.getSavedFileInfo = promisify_1.default(my.getSavedFileInfo);
exports.getSavedFileList = promisify_1.default(my.getSavedFileList);
exports.getScreenBrightness = promisify_1.default(my.getScreenBrightness);
exports.getServerTime = promisify_1.default(my.getServerTime);
exports.getSetting = promisify_1.default(my.getSetting);
exports.getStorage = promisify_1.default(my.getStorage);
exports.getStorageInfo = promisify_1.default(my.getStorageInfo);
exports.getStorageInfoSync = my.getStorageInfoSync;
exports.getStorageSync = my.getStorageSync;
exports.getSystemInfo = promisify_1.default(my.getSystemInfo);
exports.getSystemInfoSync = my.getSystemInfoSync;
exports.getTitleColor = promisify_1.default(my.getTitleColor);
exports.getUpdateManager = my.getUpdateManager;
exports.hideAddToDesktopMenu = my.hideAddToDesktopMenu;
exports.hideAllAddToDesktopMenu = my.hideAllAddToDesktopMenu;
exports.hideAllFavoriteMenu = my.hideAllFavoriteMenu;
exports.hideBackHome = my.hideBackHome;
exports.hideFavoriteMenu = my.hideFavoriteMenu;
exports.hideKeyboard = my.hideKeyboard;
exports.hideLoading = my.hideLoading;
exports.hideNavigationBarLoading = my.hideNavigationBarLoading;
exports.hideShareMenu = my.hideShareMenu;
exports.hideTabBar = my.hideTabBar;
exports.hideTabBarRedDot = my.hideTabBarRedDot;
exports.hideToast = my.hideToast;
exports.loadFontFace = promisify_1.default(my.loadFontFace);
exports.makePhoneCall = my.makePhoneCall;
exports.multiLevelSelect = promisify_1.default(my.multiLevelSelect);
exports.navigateBack = promisify_1.default(my.navigateBack);
exports.navigateBackMiniProgram = promisify_1.default(my.navigateBackMiniProgram);
exports.navigateTo = promisify_1.default(my.navigateTo);
exports.navigateToMiniProgram = promisify_1.default(my.navigateToMiniProgram);
exports.notifyBLECharacteristicValueChange = promisify_1.default(my.notifyBLECharacteristicValueChange);
exports.offAccelerometerChange = my.offAccelerometerChange;
exports.offBLECharacteristicValueChange = my.offBLECharacteristicValueChange;
exports.offBLEConnectionStateChanged = my.offBLEConnectionStateChanged;
exports.offBluetoothAdapterStateChange = my.offBluetoothAdapterStateChange;
exports.offBluetoothDeviceFound = my.offBluetoothDeviceFound;
exports.offCompassChange = my.offCompassChange;
exports.offGyroscopeChange = my.offGyroscopeChange;
exports.offMemoryWarning = my.offMemoryWarning;
exports.offNetworkStatusChange = my.offNetworkStatusChange;
exports.offSocketClose = my.offSocketClose;
exports.offSocketError = my.offSocketError;
exports.offSocketMessage = my.offSocketMessage;
exports.offSocketOpen = my.offSocketOpen;
exports.offUserCaptureScreen = my.offUserCaptureScreen;
exports.onAccelerometerChange = my.onAccelerometerChange;
exports.onBeaconServiceChange = my.onBeaconServiceChange;
exports.onBeaconUpdate = my.onBeaconUpdate;
exports.onBLECharacteristicValueChange = my.onBLECharacteristicValueChange;
exports.onBLEConnectionStateChanged = my.onBLEConnectionStateChanged;
exports.onBluetoothAdapterStateChange = my.onBluetoothAdapterStateChange;
exports.onBluetoothDeviceFound = my.onBluetoothDeviceFound;
exports.onCompassChange = my.onCompassChange;
exports.onGyroscopeChange = my.onGyroscopeChange;
exports.onMemoryWarning = my.onMemoryWarning;
exports.onNetworkStatusChange = my.onNetworkStatusChange;
exports.onSocketClose = my.onSocketClose;
exports.onSocketError = my.onSocketError;
exports.onSocketMessage = my.onSocketMessage;
exports.onSocketOpen = my.onSocketOpen;
exports.onUserCaptureScreen = my.onUserCaptureScreen;
exports.openBluetoothAdapter = my.openBluetoothAdapter;
exports.openCardDetail = my.openCardDetail;
exports.openCardList = my.openCardList;
exports.openKBVoucherDetail = my.openKBVoucherDetail;
exports.openLocation = promisify_1.default(my.openLocation);
exports.openMerchantCardList = my.openMerchantCardList;
exports.openMerchantTicketList = my.openMerchantTicketList;
exports.openMerchantVoucherList = my.openMerchantVoucherList;
exports.openSetting = promisify_1.default(my.openSetting);
exports.openTicketDetail = my.openTicketDetail;
exports.openTicketList = my.openTicketList;
exports.openVoucherDetail = my.openVoucherDetail;
exports.openVoucherList = my.openVoucherList;
exports.optionsSelect = my.optionsSelect;
exports.pageScrollTo = promisify_1.default(my.pageScrollTo);
exports.previewImage = promisify_1.default(my.previewImage);
exports.prompt = promisify_1.default(my.prompt);
exports.readBLECharacteristicValue = promisify_1.default(my.readBLECharacteristicValue);
exports.redirectTo = promisify_1.default(my.redirectTo);
exports.reLaunch = promisify_1.default(my.reLaunch);
exports.removeSavedFile = promisify_1.default(my.removeSavedFile);
exports.removeStorage = promisify_1.default(my.removeStorage);
exports.removeStorageSync = my.removeStorageSync;
exports.removeTabBarBadge = promisify_1.default(my.removeTabBarBadge);
exports.reportAnalytics = my.reportAnalytics;
exports.request = promisify_1.default(my.request);
exports.rsa = promisify_1.default(my.rsa);
exports.saveFile = promisify_1.default(my.saveFile);
exports.saveImage = promisify_1.default(my.saveImage);
exports.scan = promisify_1.default(my.scan);
exports.SDKVersion = my.SDKVersion;
exports.sendSocketMessage = promisify_1.default(my.sendSocketMessage);
exports.setBackgroundColor = promisify_1.default(my.setBackgroundColor);
exports.setBackgroundTextStyle = promisify_1.default(my.setBackgroundTextStyle);
exports.setCanPullDown = my.setCanPullDown;
exports.setClipboard = promisify_1.default(my.setClipboard);
exports.setKeepScreenOn = promisify_1.default(my.setKeepScreenOn);
exports.setNavigationBar = promisify_1.default(my.setNavigationBar);
exports.setOptionMenu = my.setOptionMenu;
exports.setScreenBrightness = promisify_1.default(my.setScreenBrightness);
exports.setStorage = promisify_1.default(my.setStorage);
exports.setStorageSync = my.setStorageSync;
exports.setTabBarBadge = promisify_1.default(my.setTabBarBadge);
exports.setTabBarItem = promisify_1.default(my.setTabBarItem);
exports.setTabBarStyle = promisify_1.default(my.setTabBarStyle);
exports.showActionSheet = promisify_1.default(my.showActionSheet);
exports.showAuthGuide = my.showAuthGuide;
exports.showLoading = promisify_1.default(my.showLoading);
exports.showNavigationBarLoading = promisify_1.default(my.showNavigationBarLoading);
exports.showSharePanel = my.showSharePanel;
exports.showTabBar = promisify_1.default(my.showTabBar);
exports.showTabBarRedDot = promisify_1.default(my.showTabBarRedDot);
exports.showToast = promisify_1.default(my.showToast);
exports.startBeaconDiscovery = promisify_1.default(my.startBeaconDiscovery);
exports.startBluetoothDevicesDiscovery = promisify_1.default(my.startBluetoothDevicesDiscovery);
exports.startPullDownRefresh = promisify_1.default(my.startPullDownRefresh);
exports.startZMVerify = my.startZMVerify;
exports.stopBeaconDiscovery = promisify_1.default(my.stopBeaconDiscovery);
exports.stopBluetoothDevicesDiscovery = promisify_1.default(my.stopBluetoothDevicesDiscovery);
exports.stopPullDownRefresh = promisify_1.default(my.stopPullDownRefresh);
exports.switchTab = promisify_1.default(my.switchTab);
exports.textRiskIdentification = promisify_1.default(my.textRiskIdentification);
exports.tradePay = promisify_1.default(my.tradePay);
exports.uploadFile = promisify_1.default(my.uploadFile);
exports.vibrate = promisify_1.default(my.vibrate);
exports.vibrateLong = promisify_1.default(my.vibrateLong);
exports.vibrateShort = promisify_1.default(my.vibrateShort);
exports.watchShake = my.watchShake;
exports.writeBLECharacteristicValue = promisify_1.default(my.writeBLECharacteristicValue);
exports.createVideoContext = my.createVideoContext;
exports.getOpenUserInfo = promisify_1.default(my.getOpenUserInfo);