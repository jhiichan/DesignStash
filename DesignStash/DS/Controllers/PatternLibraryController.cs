using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DS.Controllers
{
    public class PatternLibraryController : Controller
    {
        // GET: DS
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("Theme/DesignStash")]
        public ActionResult DesignStashTheme()
        {
            return View();
        }

        [Route("Theme/DesignStash/Preview")]
        public ActionResult DesignStashPreview(string pl, string pg, string pn)
        {
            ViewBag.patternLevel = pl;
            ViewBag.patternGroup = pg;
            ViewBag.patternName = pn;
            return View();
        }

        [Route("Preview")]
        public ActionResult Preview()
        {
            return View();
        }
    }
}