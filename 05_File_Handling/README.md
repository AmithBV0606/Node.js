# File Handling 

    - Performing operations like read, write, etc on file is called as File handling.

    - In Node.js "fs" is the built in module which is used to perform operations on file.

    - "fs" stands for File-System.

## Methods provided by fs module foe handling the files : 

1. `appendFile`: Appends data to a file, creating the file if it does not exist.

2. `appendFileSync`: Synchronously appends data to a file, creating the file if it does not exist.

3. `access`: Checks the accessibility of a file or directory.

4. `accessSync`: Synchronously checks the accessibility of a file or directory.

5. `chown`: Changes the owner and group of a file.

6. `chownSync`: Synchronously changes the owner and group of a file.

7. `chmod`: Changes the permissions of a file.

8. `chmodSync`: Synchronously changes the permissions of a file.

9. `close`: Closes a file descriptor.

10. `closeSync`: Synchronously closes a file descriptor.

11. `copyFile`: Copies a file to a new location.

12. `copyFileSync`: Synchronously copies a file to a new location.

13. `cp`: Copies files or directories, including subdirectories.

14. `cpSync`: Synchronously copies files or directories, including subdirectories.

15. `createReadStream`: Creates a readable stream to read data from a file.

16. `createWriteStream`: Creates a writable stream to write data to a file.

17. `exists`: Checks if a file or directory exists (deprecated in favor of `fs.access`).

18. `existsSync`: Synchronously checks if a file or directory exists.

19. `fchown`: Changes the owner and group of an open file.

20. `fchownSync`: Synchronously changes the owner and group of an open file.

21. `fchmod`: Changes the permissions of an open file.

22. `fchmodSync`: Synchronously changes the permissions of an open file.

23. `fdatasync`: Synchronizes a file's in-core state with storage device.

24. `fdatasyncSync`: Synchronously synchronizes a file's in-core state with storage device.

25. `fstat`: Retrieves the status of an open file.

26. `fstatSync`: Synchronously retrieves the status of an open file.

27. `fsync`: Flushes all modified file data to the disk.

28. `fsyncSync`: Synchronously flushes all modified file data to the disk.

29. `ftruncate`: Truncates an open file to a specified length.

30. `ftruncateSync`: Synchronously truncates an open file to a specified length.

31. `futimes`: Changes the timestamps of an open file.

32. `futimesSync`: Synchronously changes the timestamps of an open file.

33. `lchown`: Changes the owner and group of a symbolic link.

34. `lchownSync`: Synchronously changes the owner and group of a symbolic link.

35. `lchmod`: Changes the permissions of a symbolic link (not supported on all platforms).

36. `lchmodSync`: Synchronously changes the permissions of a symbolic link (not supported on all platforms).

37. `link`: Creates a new hard link to a file.

38. `linkSync`: Synchronously creates a new hard link to a file.

39. `lstat`: Retrieves the status of a file or symbolic link.

40. `lstatSync`: Synchronously retrieves the status of a file or symbolic link.

41. `lutimes`: Changes the timestamps of a symbolic link.

42. `lutimesSync`: Synchronously changes the timestamps of a symbolic link.

43. `mkdir`: Creates a new directory.

44. `mkdirSync`: Synchronously creates a new directory.

45. `mkdtemp`: Creates a unique temporary directory.

46. `mkdtempSync`: Synchronously creates a unique temporary directory.

47. `open`: Opens a file descriptor.

48. `openSync`: Synchronously opens a file descriptor.

49. `openAsBlob`: Opens a file as a Blob (Browser-specific).

50. `readdir`: Reads the contents of a directory.

51. `readdirSync`: Synchronously reads the contents of a directory.

52. `read`: Reads data from a file descriptor.

53. `readSync`: Synchronously reads data from a file descriptor.

54. `readv`: Reads data from a file descriptor into multiple buffers.

55. `readvSync`: Synchronously reads data from a file descriptor into multiple buffers.

56. `readFile`: Reads the entire contents of a file.

57. `readFileSync`: Synchronously reads the entire contents of a file.

58. `readlink`: Resolves the target of a symbolic link.

59. `readlinkSync`: Synchronously resolves the target of a symbolic link.

60. `realpath`: Resolves the absolute path of a file.

61. `realpathSync`: Synchronously resolves the absolute path of a file.

62. `rename`: Renames a file or directory.

63. `renameSync`: Synchronously renames a file or directory.

64. `rm`: Removes files or directories.

65. `rmSync`: Synchronously removes files or directories.

66. `rmdir`: Removes a directory.

67. `rmdirSync`: Synchronously removes a directory.

68. `stat`: Retrieves the status of a file.

69. `statfs`: Retrieves filesystem statistics.

70. `statSync`: Synchronously retrieves the status of a file.

71. `statfsSync`: Synchronously retrieves filesystem statistics.

72. `symlink`: Creates a new symbolic link.

73. `symlinkSync`: Synchronously creates a new symbolic link.

74. `truncate`: Truncates a file to a specified length.

75. `truncateSync`: Synchronously truncates a file to a specified length.

76. `unwatchFile`: Stops watching for changes on a file.

77. `unlink`: Removes a file or symbolic link.

78. `unlinkSync`: Synchronously removes a file or symbolic link.

79. `utimes`: Changes the timestamps of a file.

80. `utimesSync`: Synchronously changes the timestamps of a file.

81. `watch`: Watches for changes on a file or directory.

82. `watchFile`: Watches a file for changes.

83. `writeFile`: Writes data to a file, replacing the file if it already exists.

84. `writeFileSync`: Synchronously writes data to a file, replacing the file if it already exists.

85. `write`: Writes data to a file descriptor.

86. `writeSync`: Synchronously writes data to a file descriptor.

87. `writev`: Writes data from multiple buffers to a file descriptor.

88. `writevSync`: Synchronously writes data from multiple buffers to a file descriptor.

89. `Dirent`: Represents a directory entry.

90. `Stats`: Represents file status information.

91. `ReadStream`: Represents a readable stream for a file.

92. `WriteStream`: Represents a writable stream for a file.

93. `FileReadStream`: Represents a file's readable stream (deprecated).

94. `FileWriteStream`: Represents a file's writable stream (deprecated).

95. `_toUnixTimestamp`: Converts a date to a Unix timestamp.

96. `Dir`: Represents a directory handle.

97. `opendir`: Opens a directory for reading.

98. `opendirSync`: Synchronously opens a directory for reading.

__NOTE :__ Refer index.js file to see the examples of few commonly used methods among the list of above mentioned methods.