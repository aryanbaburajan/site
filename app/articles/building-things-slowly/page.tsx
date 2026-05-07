export default function BuildingThingsSlowlyArticle() {
  return (
    <main className="prose">
      <h1>Hacking to the Vending Machine</h1>
      <hr />
      <p>Whatever hacking means to you.</p>
      <p>
        I found an access to the file manager in our college's vending machines.
      </p>
      <p>
        You order a snack, go to the feedback form. Over there you rate it
        absolutely horrible <i>(It's okay, the overpricing justifies it)</i>.
      </p>
      <p>
        This then brings up the Google keyboard through which you can access the
        settings for it. From there, your personal dictionary, and the button to
        export it into a selecteable file.
      </p>
      <p>
        The most I could do in my experiments is create directories. In my next
        attempt, I'd like to try writing to an .html file through the dictionary
        export, and opening that with the operating system's default browser.
      </p>
      <p>
        Oh, and yes, the vending machines are running a very old version of
        Android. Perhaps 7.
      </p>
      <p>
        I managed to get access to the file manager in the vending machines Need
        to figure out a way to write files there's .apk's in it but I couldn't
        find a way to execute anything And the only way to write files would be
        ... exporting the data from our google keyboard dictionary to a local
        file. We're lucky if it's a plaintext .txt, otherwise we would be stuck
        with ... JSON formatting We can create folders, and specify the output
        file. But I think the directory is limited to the keyboard's
        specifications. I think a certain prefix is enforced. Probably not
        string-based, otherwise we could just
        /storage/0/emulated/some/prefix/../../butwegotout Someone find the
        format of the dictionary backups in Gboard. I reckon the version in the
        vending machine is very old though. Android 7 or so. If we could ...
        somehow ... add a binary file to our dictionary. And, uh, save that.
        Into an .apk file. And somehow get that ... to run. Daym What I just
        said is very unfeasible because encodings matter and you can't just ...
        run an executable by writing binary strings into a text file ... unless
        ... you can ...? I gotta test this Make it 🥰👍 What I just said is very
        unfeasible because encodings matter and you can't just ... run an
        executable by writing binary strings into a text file ... unless ... you
        can ...? I gotta test this Do jt I won't report u 🥺🤧👍 Why would I
        give a fuck about being reported 🤣 I'd do this in front of the college
        in daylight The bottleneck is that we can't execute any .apks. We need a
        workaround. I do wonder if the opening of all other applications is
        blocked; I haven't been able to test it. I tried to look for URLs in the
        app - and found a lot in the open source licenses. But none of them were
        hyperlinked. The File Manager could very well have been a full screen
        pop-up - so it's impossible to infer anything from it. I'm hoping to
        write an .html file next time and open the web browser through that.
      </p>
    </main>
  );
}
