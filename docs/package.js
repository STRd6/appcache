(function(pkg) {
  // Expose a require for our package so scripts can access our modules
  window.require = Require.generateFor(pkg);
})({
  "version": "0.1.0",
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
      "content": "version: \"0.1.0\"\nentryPoint: \"main\"\n",
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
      "content": "module.exports = {\"version\":\"0.1.0\",\"entryPoint\":\"main\"};",
      "type": "blob"
    }
  },
  "entryPoint": "main",
  "dependencies": {},
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "repository": {
    "id": 14539483,
    "name": "appcache",
    "full_name": "STRd6/appcache",
    "owner": {
      "login": "STRd6",
      "id": 18894,
      "avatar_url": "https://2.gravatar.com/avatar/33117162fff8a9cf50544a604f60c045?d=https%3A%2F%2Fidenticons.github.com%2F39df222bffe39629d904e4883eabc654.png&r=x",
      "gravatar_id": "33117162fff8a9cf50544a604f60c045",
      "url": "https://api.github.com/users/STRd6",
      "html_url": "https://github.com/STRd6",
      "followers_url": "https://api.github.com/users/STRd6/followers",
      "following_url": "https://api.github.com/users/STRd6/following{/other_user}",
      "gists_url": "https://api.github.com/users/STRd6/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/STRd6/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/STRd6/subscriptions",
      "organizations_url": "https://api.github.com/users/STRd6/orgs",
      "repos_url": "https://api.github.com/users/STRd6/repos",
      "events_url": "https://api.github.com/users/STRd6/events{/privacy}",
      "received_events_url": "https://api.github.com/users/STRd6/received_events",
      "type": "User",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/STRd6/appcache",
    "description": "HTML5 AppCache Helpers",
    "fork": false,
    "url": "https://api.github.com/repos/STRd6/appcache",
    "forks_url": "https://api.github.com/repos/STRd6/appcache/forks",
    "keys_url": "https://api.github.com/repos/STRd6/appcache/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/STRd6/appcache/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/STRd6/appcache/teams",
    "hooks_url": "https://api.github.com/repos/STRd6/appcache/hooks",
    "issue_events_url": "https://api.github.com/repos/STRd6/appcache/issues/events{/number}",
    "events_url": "https://api.github.com/repos/STRd6/appcache/events",
    "assignees_url": "https://api.github.com/repos/STRd6/appcache/assignees{/user}",
    "branches_url": "https://api.github.com/repos/STRd6/appcache/branches{/branch}",
    "tags_url": "https://api.github.com/repos/STRd6/appcache/tags",
    "blobs_url": "https://api.github.com/repos/STRd6/appcache/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/STRd6/appcache/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/STRd6/appcache/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/STRd6/appcache/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/STRd6/appcache/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/STRd6/appcache/languages",
    "stargazers_url": "https://api.github.com/repos/STRd6/appcache/stargazers",
    "contributors_url": "https://api.github.com/repos/STRd6/appcache/contributors",
    "subscribers_url": "https://api.github.com/repos/STRd6/appcache/subscribers",
    "subscription_url": "https://api.github.com/repos/STRd6/appcache/subscription",
    "commits_url": "https://api.github.com/repos/STRd6/appcache/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/STRd6/appcache/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/STRd6/appcache/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/STRd6/appcache/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/STRd6/appcache/contents/{+path}",
    "compare_url": "https://api.github.com/repos/STRd6/appcache/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/STRd6/appcache/merges",
    "archive_url": "https://api.github.com/repos/STRd6/appcache/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/STRd6/appcache/downloads",
    "issues_url": "https://api.github.com/repos/STRd6/appcache/issues{/number}",
    "pulls_url": "https://api.github.com/repos/STRd6/appcache/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/STRd6/appcache/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/STRd6/appcache/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/STRd6/appcache/labels{/name}",
    "releases_url": "https://api.github.com/repos/STRd6/appcache/releases{/id}",
    "created_at": "2013-11-19T22:09:16Z",
    "updated_at": "2013-11-19T22:09:16Z",
    "pushed_at": "2013-11-19T22:09:16Z",
    "git_url": "git://github.com/STRd6/appcache.git",
    "ssh_url": "git@github.com:STRd6/appcache.git",
    "clone_url": "https://github.com/STRd6/appcache.git",
    "svn_url": "https://github.com/STRd6/appcache",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
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
    "network_count": 0,
    "subscribers_count": 1,
    "branch": "master",
    "defaultBranch": "master"
  }
});