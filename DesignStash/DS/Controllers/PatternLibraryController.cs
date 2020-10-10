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

        [Route("Theme")]
        public ActionResult Theme()
        {
            return View();
        }

        [Route("Preview")]
        public ActionResult Preview(string theme = null, string pl = null, string pg = null, string pn = null)
        {
            ViewBag.theme = theme;
            ViewBag.patternLevel = pl;
            ViewBag.patternGroup = pg;
            ViewBag.patternName = pn;
            return View();
        }
    }
}