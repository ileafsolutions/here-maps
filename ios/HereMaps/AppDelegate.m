/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <NMAKit/NMAKit.h>

NSString* const kSampleAppID = @"if42Mx5nyBHWq1ep1ImX";
NSString* const kSampleAppCode = @"87rPh80pmkOx6V3Q-MLd1Q";
NSString* const kSampleMapLicenseKey = @"VcgkRbUF9OR5oC03m/9DcGDHV5N8c/ycRwlhP3e2aNs5Ra13PtiuL3zpJszSbCdZMo0V/w5zTp1aT24zgBLIAPGR8TLG8Q4BXfbPqcTYznl45oJ1pH9A0Zcq3nIXy5wmHnK20vDW3sb8ztwcWuWvRYRGY37pURPGeHBYNy7B6C1oBdyOLP01RO4N25vnnXtQwBx2ZedzOUYYRQgAjBEOzkMMW/vpkGM35uBfKFOxtgnKwQ0qU8BsysOwV7cDvUVLm8V5R5rxHtfY8OFBPWDGTWDgnbTFkjY7TYHg4Oq++Zyau0zbBBsedyXSnQyCkbX/pZ5sShxIunO2nBW2fKO9r7iMVqFddltSssHsitu5nzDeRYEVq98jqAkktuzjcd8/SxyTGoISC/IUu/Nll0sv7Z0tM/FH8/c4/9aTrcFENA1ejm/PEcCG6f4f08Qi2no2ZKsccHQCuBhx1C9Sj7H1qD2MJp7BQa0h5vB9PVa+o4k+Fn7vHz5R9rpRq5rvZmkOUseqMYVIy/6y+I3yakzCE58pteij7gUgKLeBkNqYPdJuLhAk6Wu6oECEatRY6uIfL/j8h56Fd179pmYLKamtIGXpEEXEU+2iKlmXfNVCK9O1riGOg4LT7XYraA6QFRMiWW29UWymYeEcrOHtimovINlxct1jOPfR10oRkwHfJ+4=";

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"HereMaps"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  [NMAApplicationContext setAppId:kSampleAppID
                          appCode:kSampleAppCode
                       licenseKey:kSampleMapLicenseKey];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
