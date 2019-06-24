# CookieApp
Collaborative project from cookie lovers for cookie lovers

## How to Collaborate
This is a simple guide on how to `Fork`, `Clone` and `Pull Request` to start contributing to the CookieApp

#### Table of Contents
1. [Forking the Repository](#Forking-the-Repository)

2. [Cloning the Repository](#Cloning-the-Repository)

3. [Requesting a PR](#Requesting-a-PR)

### Forking the Repository

1. Navigate to the [CookieApp](https://github.com/CamJulia/CookieApp)

2. On the top right corner click the `Fork` button

3. To continue to `Clone` the repository, navigate to **your forked** version of the CookieApp

For an in depth explanation please refer to [this link](https://help.github.com/en/articles/fork-a-repo) on how to `Fork` a repository.

### Cloning the Repository

1. From **your forked** version of the CookieApp, click on the **Clone or Download** button on the top right corner

2. Copy the link which is shown (either Clone with HTTPS or Clone with SSH)

3. Open GitBash or your Terminal (depending on your OS) and type in `git clone` + **copied url** from the previous step (this is to be done in a git initiated `git init` folder on your local machine)

### Syncing your Fork with the Original

By following the below steps, you are able to configure Git to pull changes from the original, or *upstream*, repository into the local clone of your fork

1. Copy the clone link from the ***original repository** using the same method in the [Cloning the Repository](#Cloning-the-Repository) section

2. In GitBash or your Terminal, type in `git remote -v` to view your current configured remote repositories.

```
$ git remote -v
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin  https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
```

3. Type `git remote add upstream` + **copied original repo url**


```
$ git remote add upstream https://github.com/CamJulia/CookieApp.git
```

4. To verify the newly configured `upstream repository` you can type in `git remote -v` again. You should see the url for **your forked** version as `origin` and the url for the original repository as `upstream`

```
$ git remote -v
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (fetch)
> origin    https://github.com/YOUR_USERNAME/YOUR_FORK.git (push)
> upstream  https://github.com/CamJulia/CookieApp.git (fetch)
> upstream  https://github.com/CamJulia/CookieApp.git (push)
```

5. After the setup of the previous steps you should be able to type in `git pull upstream master` to update the changes made in the original repository to your local machine

```
$ git pull upstream master
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (1/1), done.
remote: Total 3 (delta 2), reused 3 (delta 2), pack-reused 0
Unpacking objects: 100% (3/3), done.
From https://github.com/CamJulia/CookieApp
 * branch            master     -> FETCH_HEAD
   a6cce6f..f9e25d7  master     -> upstream/master
Updating a6cce6f..f9e25d7
Fast-forward
 features.md | 1 +
 1 file changed, 1 insertion(+)
 ```
### Reqeusting a PR (Pull Request)

1. After pushing all your changes to your forked version of the original repostiory, navigate to your forked repo

2. Click the `New Pull Request` button next to the Branch button on the top-left side of the page

3. In the comments section of the pull request, be detailed in explaining the changes you have made and click request
..* You can also specify the **Issue Number** in the comments. This will automatically close the related issue once your changes are merged (this only concerns if you are using the `Project` tab)
