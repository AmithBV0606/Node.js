# Versioning

### ^4.18.3
    1st Part -> 4
    2nd Part -> 18
    3rd Part -> 2

    3rd Part - Minor Fixes (optional)
    Example : small bug, typo fix, etc
    4.18.3, 4.18.4, 4.18.5

    2nd Part - Recommended Bug Fix (Security Fix)
    Example : critical bug fix, adding features.
    4.16.0, 4.17.0, 4.18.0

    3rd Part - Major release - Major/Breaking Update
    5.0.0, 6.0.0, 7.0.0
    Have to read the documentation before upgrading to the latest version

### To install a specific version : 
```bash
npm install express@4.17.2
```

### "^version" : Compatible with version 
    ^4.18.2 : It blocks the version 4, means that whatever the update comes, it will not be updated to 5.0.0

    ^4.18.2 less than 5.0.0

    ^ - Install all Recommended and Minor Fixes automatically.

    Without this symbol there will be no more automatic update, it will fix the version to the specified version.

### "~version" : Approximately equivalent to version
    ~4.18.1
    ~4.18.2
    ~4.18.3
    ~4.18.4

    4.19.0 => Nooo

### npm versioning rules : 

 - `version` Must match version exactly

 - `>version` Must be greater than version

 - `>=version` etc

 - `<version`

 - `<=version`

 - `~version` "Approximately equivalent to version" 

 - `^version` "Compatible with version" 

 - `1.2.x` 1.2.0, 1.2.1, etc., but not 1.3.0

 - `http://...` See 'URLs as Dependencies' below

 - `*` Matches any version

 - `""` (just an empty string) Same as *

 - `version1 - version2` Same as `>=version1 <=version2`.

 - `range1 || range2` Passes if either range1 or range2 are satisfied.

 - `git...` See 'Git URLs as Dependencies' below

 - `user/repo` See 'GitHub URLs' below

 - `tag` A specific version tagged and published as tag See npm dist-tag

 - `path/path/path` See Local Paths below

 - `npm:@scope/pkg@version` Custom alias for a pacakge See package-spec

 ### For example, these are all valid:
 ```json
{
  "dependencies": {
    "foo": "1.0.0 - 2.9999.9999",
    "bar": ">=1.0.2 <2.1.2",
    "baz": ">1.0.2 <=2.3.4",
    "boo": "2.0.1",
    "qux": "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0",
    "asd": "http://asdf.com/asdf.tar.gz",
    "til": "~1.2",
    "elf": "~1.2.3",
    "two": "2.x",
    "thr": "3.3.x",
    "lat": "latest",
    "dyl": "file:../dyl",
    "kpg": "npm:pkg@1.0.0"
  }
}
```