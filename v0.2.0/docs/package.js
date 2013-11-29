(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 Daniel X Moore\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "appcache\n========\n\nHTML5 AppCache Helpers\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "App Cache\n=========\n\nSome helpers for working with HTML5 application cache.\n\nhttp://www.html5rocks.com/en/tutorials/appcache/beginner/\n\n    applicationCache = window.applicationCache\n\n    applicationCache.addEventListener 'updateready', (e) ->\n      if applicationCache.status is applicationCache.UPDATEREADY\n        # Browser downloaded a new app cache.\n        if confirm('A new version of this site is available. Load it?')\n          window.location.reload()\n    , false\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\nentryPoint: \"main\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var applicationCache;\n\n  applicationCache = window.applicationCache;\n\n  applicationCache.addEventListener('updateready', function(e) {\n    if (applicationCache.status === applicationCache.UPDATEREADY) {\n      if (confirm('A new version of this site is available. Load it?')) {\n        return window.location.reload();\n      }\n    }\n  }, false);\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\",\"entryPoint\":\"main\"};",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "main",
  "repository": {
    "id": 14539483,
    "name": "appcache",
    "full_name": "distri/appcache",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/appcache",
    "description": "HTML5 AppCache Helpers",
    "fork": false,
    "url": "https://api.github.com/repos/distri/appcache",
    "forks_url": "https://api.github.com/repos/distri/appcache/forks",
    "keys_url": "https://api.github.com/repos/distri/appcache/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/appcache/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/appcache/teams",
    "hooks_url": "https://api.github.com/repos/distri/appcache/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/appcache/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/appcache/events",
    "assignees_url": "https://api.github.com/repos/distri/appcache/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/appcache/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/appcache/tags",
    "blobs_url": "https://api.github.com/repos/distri/appcache/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/appcache/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/appcache/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/appcache/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/appcache/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/appcache/languages",
    "stargazers_url": "https://api.github.com/repos/distri/appcache/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/appcache/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/appcache/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/appcache/subscription",
    "commits_url": "https://api.github.com/repos/distri/appcache/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/appcache/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/appcache/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/appcache/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/appcache/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/appcache/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/appcache/merges",
    "archive_url": "https://api.github.com/repos/distri/appcache/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/appcache/downloads",
    "issues_url": "https://api.github.com/repos/distri/appcache/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/appcache/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/appcache/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/appcache/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/appcache/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/appcache/releases{/id}",
    "created_at": "2013-11-19T22:09:16Z",
    "updated_at": "2013-11-29T20:49:51Z",
    "pushed_at": "2013-11-19T22:10:28Z",
    "git_url": "git://github.com/distri/appcache.git",
    "ssh_url": "git@github.com:distri/appcache.git",
    "clone_url": "https://github.com/distri/appcache.git",
    "svn_url": "https://github.com/distri/appcache",
    "homepage": null,
    "size": 240,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});