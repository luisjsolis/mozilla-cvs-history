# Sample Talos configuration file

# The title of the report
title: firefox_testing

#csv_file: 'out.csv'
results_server: 'graphs-stage.mozilla.org'
results_link: '/bulk.cgi'

# Path to Firefox to test
firefox: firefox/firefox

branch: testbranch

buildid: testbuildid

profile_path: base_profile

init_url: getInfo.html

# Preferences to set in the test (use "preferences : {}" for no prefs)
preferences : 
  browser.shell.checkDefaultBrowser : false
  browser.warnOnQuit : false
  dom.allow_scripts_to_close_windows : true
  dom.disable_open_during_load: false
  dom.max_script_run_time : 0
  browser.dom.window.dump.enabled: true
  network.proxy.type : 1
  network.proxy.http : localhost
  network.proxy.http_port : 80
  dom.disable_window_flip : true
  dom.disable_window_move_resize : true
  security.enable_java : false
  extensions.checkCompatibility : false
  extensions.update.notifyUser: false

# Extensions to install in test (use "extensions: {}" for none)
# Need quotes around guid because of curly braces
# extensions : 
#     "{12345678-1234-1234-1234-abcd12345678}" : c:\path\to\unzipped\xpi
#     foo@sample.com : c:\path\to\other\unzipped\xpi
extensions : {}

#any directories whose contents need to be installed in the browser before running the tests
# this assumes that the directories themselves already exist in the firefox pat
dirs:
  chrome : page_load_test/chrome
  components : page_load_test/components

# Environment variables to set during test (use env: {} for none)
env : 
  NO_EM_RESTART : 1
# Tests to run
#  url       : (REQUIRED) url to load into the given firefox browser
#  url_mod   : (OPTIONAL) a bit of code to be evaled and added to the given url during each cycle of the test
#  resolution: (REQUIRED) how long (in seconds) to pause between counter samplig
#  cycles    : (REQUIRED) how many times to run the test
#  counters  : (REQUIRED) types of system activity to monitor during test run, can be empty 
#            For possible values of counters argument on Windows, see
#            http://technet2.microsoft.com/WindowsServer/en/Library/86b5d116-6fb3-427b-af8c-9077162125fe1033.mspx?mfr=true
#            Possible values on Linux and Mac:
#            counters : ['Private Bytes', 'RSS']
#            Standard windows values:
#            counters : ['Working Set', 'Private Bytes', '% Processor Time']

# to set up a new test it must have the correct configuration options and drop information in a standard format
# the format is seen in the regular expressions in ttest.py
# to see how the data passed from the browser is processed see send_to_graph anisend_to_csv in run_tests.py
tests :
  ts :
    url : startup_test/startup_test.html?begin=
    url_mod : str(int(time.time()*1000))
    resolution : 1 
    cycles : 5
    win_counters : []
    unix_counters : []
#  tp: 
#    url :  '-tp page_load_test/manifest.txt -tpchrome -tpformat tinderbox -tpcycles 5'
#    resolution : 1
#    cycles : 1
#    win_counters : ['Working Set', 'Private Bytes', '% Processor Time']
#    unix_counters : ['RSS', 'Private Bytes']
  tp_js: 
    url : '"http://localhost/page_load_test/framecycler.html?quit=1&cycles=5"'
    resolution : 1
    cycles : 1
    win_counters : ['Working Set', 'Private Bytes', '% Processor Time']
    unix_counters: ['RSS', 'Private Bytes']